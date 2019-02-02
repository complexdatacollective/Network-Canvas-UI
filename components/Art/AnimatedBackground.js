import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimatedBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeList: [],
      context: null,
    };

    this.canvas = React.createRef();

    // Create the ref
    // this.canvasRef = React.createRef();

    this.minDist = 100;
    this.springAmount = 0.0002;
    this.rgb = '255, 255, 255';


    this.devicePixelRatio = window.devicePixelRatio || 1;

    this.backingStoreRatio = 1;

    this.ratio = this.devicePixelRatio / this.backingStoreRatio;

    this.nodesLoop = this.nodesLoop.bind(this);
    this.drawNode = this.drawNode.bind(this);
    this.spring = this.spring.bind(this);
  }

  componentWillMount() {
    console.log('cwm');
    this.createNodes();
  }

  componentDidMount() {
    console.log('CDM');
    this.setState({ context: this.canvas.current.getContext('2d') }, () => {
      // this.state.context.globalCompositeOperation = 'difference';
    });
    this.nodesInit();
  }

  spring(na, nb) {
    if (!na || !nb) { return; }
    const dx = nb.x - na.x;
    const dy = nb.y - na.y;
    const dist = Math.sqrt((dx * dx) + (dy * dy));
    if (dist < this.minDist) {
      this.state.context.beginPath();
      this.state.context.lineWidth = 5;
      this.state.context.strokeStyle = 'rgb(255, 255, 255)';
      this.state.context.moveTo(na.x, na.y);
      this.state.context.lineTo(nb.x, nb.y);
      this.state.context.stroke();
      this.state.context.closePath();
      const ax = dx * this.springAmount;
      const ay = dy * this.springAmount;

      if (na.vx < 1) {
        na.vx += ax / 2;
      }

      if (na.vy < 1) {
        na.vy += ay / 2;
      }

      nb.vx -= ax / 4;
      nb.vy -= ay / 4;
    }
  }

  nodesInit() {
    console.log('nodesINIT');
    this.looper = setInterval(this.nodesLoop, 1000);
  }

  nodesLoop() {
    console.log('nodesloop');
    this.state.context.clearRect(0, 0, 300, 300);
    this.state.context.lineWidth = 0.5;
    for (let i = 0; i < this.state.nodeList.length - 1; i += 1) {
      for (let j = i + 1; j < this.state.nodeList.length; j += 1) {
        this.spring(this.state.nodeList[i], this.state.nodeList[j]);
      }
    }
    for (let i = 0; i < this.state.nodeList.length; i += 1) {
      this.updateNode(this.state.nodeList[i], i);
    }
  }

  updateNode(node, index) {
    const newNode = {
      ...node,
    };
    newNode.x += node.vx;
    newNode.y += node.vy;
    if (newNode.x > 300 + 3) {
      newNode.x = 0;
    } else if (newNode.x < 0) {
      newNode.x = 300;
    }
    if (newNode.y > 300 + 3) {
      newNode.y = 0;
    } else if (this.y < 0) {
      newNode.y = 300;
    }

    const newNodeList = this.state.nodeList;
    newNodeList[index] = newNode;

    this.setState({
      nodeList: newNodeList,
    }, this.drawNode(node));
  }

  drawNode(node) {
    this.state.context.fillStyle = 'rgb(255, 255, 255)';
    this.state.context.beginPath();
    this.state.context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
    this.state.context.closePath();
    this.state.context.fill();
  }

  createNodes() {
    console.log('createNodes');
    for (let i = 0; i < this.props.numberOfNodes; i += 1) {
      let randvx = Math.random();
      randvx *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

      let randvy = Math.random();
      randvy *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

      const node = {
        radius: 8,
        x: Math.random() * 300,
        y: Math.random() * 300,
        vx: randvx,
        vy: randvy,
        mass: 0,
      };

      this.setState(previousState => ({
        nodeList: [...previousState.nodeList, node],
      }));
    }
  }

  render() {
    return (<canvas
      className="nc-art nc-art--node-AnimatedBackground"
      ref={this.canvas}
      width={300}
      height={300}
    />);
  }
}


AnimatedBackground.propTypes = {
  numberOfNodes: PropTypes.number.isRequired,
  color: PropTypes.string,
};

AnimatedBackground.defaultProps = {
  numberOfNodes: 20,
  color: '--color-primary',
};

export default AnimatedBackground;
