import React from 'react';
import './HobbiesPage.less';
import Card from './components/HobbiesCard';
import { connect } from 'react-redux';
import { actions } from '../../reducers/user';

const cardList = [
  {
    title: '多吃蔬菜',
    description: '身体变健康，心情更舒畅',
    id: 1,
    url: 'http://47.102.192.173/banner_03.png',
  },
  {
    title: '去爬山去跑步',
    description: '改变生活改变自己',
    id: 2,
    url: 'http://47.102.192.173/banner_12.png',
  },
  {
    title: '一起去看海',
    description: '在山的那边海的那边...',
    id: 3,
    url: 'http://47.102.192.173/banner_13.png',
  }
]

class HobbiesPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      cardList: cardList
    }
  }
  next = () => {
    const cardList2 = this.state.cardList.slice(1, 3);
    const cardList3 = cardList2.concat(cardList.find(item => !cardList2.some(i => item.id === i.id)))
    let step = this.state.step;
    step++;
    this.setState({
      cardList: cardList3,
      step,
    });
    this.props.increase();
  };
  back = () => {
    if(this.state.step !== 0) {
      const cardList2 = this.state.cardList.slice(0, -1);
      const cardList3 = [cardList.find(item => !cardList2.some(i => item.id === i.id))].concat(cardList2);
      let step = this.state.step;
      step--;
      this.setState({
        cardList: cardList3,
        step,
      });
      this.props.decrease();
    }
  };
  render() {
    return (
      <div className="hobbies-wrapper">
        { this.props.number }
        {
          this.state.cardList.map( (item, index) => {
            return (
              <Card key={item.id} cardMess={item} classProps={`card-${index%3}`}/>
            )
          })
        }
        <div className="icon-part">
          <div className={`item-${this.state.step}`} onClick={this.back}>
            <i className="iconfont icon-return"></i>
          </div>
          <div className="start-item">
            <i className="iconfont icon-start-solid"></i>
          </div>
          <div className="return-item" onClick={this.next}>
            <i className="iconfont icon-return"></i>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // prop : state.xxx  | 意思是将state中的某个数据映射到props中
    number: state.count,
  };
};
const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
  return {
    increase: () => {
      dispatch(actions.increase());
    },
    decrease: () => {
      dispatch(actions.decrease());
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HobbiesPage);
