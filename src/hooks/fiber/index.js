import element from "./element";
const container = document.getElementById('app');
const PLACEMENT = 'PLACEMENT';

class FiberNode {
    constructor(tag, pendingProps, key, mode) {
      // 节点类型信息,实例属性,节点的类型信息
      this.tag = tag; // 标记不同组件类型/Fiber单元类型 ，如classComponent，functionComponent, hostComponent(在 DOM 环境中就是 DOM 节点，例如 div)
      this.type = null; // 节点元素类型, 表示fiber的真实类型 ，elementType基本一样，如div、MyComp
      this.key = key; // react元素上的key 就是jsx上写的那个key，也就是最终ReactElement上的
      this.elementType = null; // createElement的第一个参数，ReactElement上的type

      this.stateNode = null; // 实例对象，比如class组件new完后就挂载在这个属性上面，如果是RootFiber，那么它上面挂的是FiberRoot

      // fiber 结构信息
      this.return = null; // 父节点，指向上一个fiber
      this.child = null; // 子节点，指向自身下面的第一个fiber
      this.sibling = null; // 兄弟组件, 指向一个兄弟节点

      this.index = 0; //  一般如果没有兄弟节点的话是0 当某个父节点下的子节点是数组类型的时候会给每个子节点一个index，index和key要一起做diff

      this.ref = null; // reactElement上的ref属性

      // 节点状态,节点的组件实例、props、state等，它们将影响组件的输出
        //        对于宿主组件，这里保存宿主组件的实例, 例如DOM节点。
        //        对于类组件来说，这里保存类组件的实例
        //        对于函数组件说，这里为空，因为函数组件没有实例
      this.pendingProps = pendingProps; // 新的、待处理的props
      this.memoizedProps = null; // 上一次渲染的props
      this.memoizedState = null; // 对应memoizedProps，上次渲染的state，相当于当前的state，理解成prev和next的关系

      this.updateQueue = null; // fiber上的更新队列 执行一次setState就会往这个属性上挂一个新的更新, 每条更新最终会形成一个链表结构，最后做批量更新

      this.mode = mode; // 表示当前组件下的子组件的渲染方式

      // effects 副作用
      this.effectTag = NoEffect; // 当前节点的副作用类型，表示当前fiber要进行何种更新,例如节点更新、删除、移动
      this.nextEffect = null; // 将所有有‘副作用’的节点都通过nextEffect连接起来,指向下个需要更新的fiber

      this.firstEffect = null; // 指向所有子节点里，需要更新的fiber里的第一个
      this.lastEffect = null; // 指向所有子节点中需要更新的fiber的最后一个

      this.expirationTime = NoWork; // 过期时间，代表任务在未来的哪个时间点应该被完成
      this.childExpirationTime = NoWork; // child过期时间

    /**
     * ⚛️ 替身
     * 指向旧树中的节点
     */
      this.alternate = null; // current树和workInprogress树之间的相互引用
    }
  }

// <App />组件的根节点: id 为 'app'的节点
const rootFiber = {
  stateNode: container,
  props: {
    children: [ element ]
  }
}

let nextUnitOfWork = rootFiber;

// 对 Fiber 进行比对
function beginWork(currentFiber){
  if(!currentFiber.stateNode){
    currentFiber.stateNode = document.createElement(currentFiber.type);
    Object.keys(currentFiber.props).filter(p => p != 'children').forEach(p => {
      currentFiber.stateNode.setAttribute(p, currentFiber.props[p])
    });
  }

  const children = currentFiber.props.children;

  if(!Array.isArray(children)){
    return;
  }

  let previousFiber = null;
  children.forEach((child, index) => {
    const fiberNode = {
      type: child.type,
      props: child.props,
      return: currentFiber,
      effectTag: PLACEMENT,
    }

    if(index === 0){
      currentFiber.child = fiberNode;
    }else{
      previousFiber.sibling = fiberNode;
    }

    previousFiber = fiberNode;
  });
}

// 将所有打了 Effect 标记的节点串联起来
function completeUnitOfWork(currentFiber){

  const returnFiber = currentFiber.return;

  if(returnFiber){
    if(!returnFiber.firstEffect){
      returnFiber.firstEffect = currentFiber.firstEffect;
    }

    if(currentFiber.lastEffect){
      if(returnFiber.lastEffect){
        returnFiber.lastEffect.nextEffect = currentFiber.firstEffect;
      }

      returnFiber.lastEffect = currentFiber.lastEffect;
    }
    if(currentFiber.effectTag){
      if(returnFiber.lastEffect){
        returnFiber.lastEffect.nextEffect = currentFiber;
      }else {
        returnFiber.firstEffect = currentFiber;
      }
      returnFiber.lastEffect = currentFiber;
    }
  }
}

/**
 * 对 Fiber 进行操作，并按照深度遍历的顺序返回下一个 Fiber
 * @params fiber 当前需要处理的节点
 * @params topWork 本次更新的根节点
 */
function performUnitOfWork(currentFiber){
  beginWork(currentFiber);

    // 存在子节点，那么下一个待处理的就是子节点
  if(currentFiber.child){
    return currentFiber.child;
  }

  // 没有子节点了，上溯查找兄弟节点
  while(currentFiber){

    completeUnitOfWork(currentFiber);

    // 找到兄弟节点，下一个要处理的就是兄弟节点
    if(currentFiber.sibling){
      return currentFiber.sibling;
    }

    // 没有找到兄弟节点, 继续上溯
    currentFiber = currentFiber.return;
  }
}

// 副作用提交
function commitRoot(){
  let currentFiber = rootFiber.firstEffect;

  while(currentFiber){
    if(currentFiber.effectTag === 'PLACEMENT'){
      currentFiber.return.stateNode.appendChild(currentFiber.stateNode);
    }

    currentFiber = currentFiber.nextEffect;
  }
}

// 1️⃣ performWork 会拿到一个Deadline，表示剩余时间
function workLoop(deadLine){

  // 2️⃣ 循环取出updateQueue中的任务
  // 每执行完一个‘执行单元‘，就检查一下剩余时间是否充足，如果充足就进行执行下一个执行单元，反之则停止执行，保存现场，等下一次有执行权时恢复
  while(nextUnitOfWork && deadLine.timeRemaining() >= 0){
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if(!nextUnitOfWork){
    commitRoot();
  }
}

requestIdleCallback(workLoop);