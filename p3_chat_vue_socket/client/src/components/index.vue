<template>
  <div class="c-talk">
    <div v-if="!hasUserName" class="talk-name">
      <div class="name">
        <h3 class="name-tip">Let us chat together!</h3>
        <h3 class="name-title">What's your nickname?(<=10)</h3>
        <input class="name-input" type="text" maxlength="10" v-model="userName" @keyup.enter="addUserName" />
      </div>
    </div>
    <div v-if="hasUserName" class="talk-cont">
      <ul class="cont-ul">
        <li class="mes-li mes-li-left">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-left">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-left">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-left">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-left">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name">用户a<span class="time">2017/08/20/11:50</span> </p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-center">
          <p class="li-text">2017/08/20/11:50 谁退出谁加入啦这是消息推送状态提醒</p>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
        <li class="mes-li mes-li-right">
          <div class="li-head"><img src="http://img01.rastargame.com/p_upload/2017/0605/1496634201481713.png"/></div>
          <div class="li-box">
            <p class="box-name"><span class="time">2017/08/20/11:50</span>用户a</p>
            <p class="box-mes">哈哈哈哈哈哈哈哈</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="hasUserName" class="talk-edit">
      <textarea placeholder="请输入..." class="edit-text"></textarea>
      <div class="edit-btn">
        <a class="btn-a btn-send" href="javascript:;">发送</a>
        <a class="btn-a btn-clear" href="javascript:;">清空</a>
        <a class="btn-a btn-exit" href="javascript:;">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
//  import './../sass/index.scss'
import io from 'socket.io-client'
export default {
  data () {
    return {
      hasUserName: false,
      userName: '',
      socket: null
    }
  },
  created () {
    // this.addNameLogin()
  },
  methods: {
    addUserName () {
      this.userName = this.userName.replace(/\s+/g, '')
      if (this.userName.length > 0) {
        console.log(this.userName.length)
        this.socket = io.connect('http://localhost:8081')
        this.socket.emit('join', {userName: this.userName})
        // change show
        this.hasUserName = true
      }
    },
    testChat () {
      this.socket.on('open', function (data) {
        console.log(data)
      })
      this.socket.on('news', function (data) {
        console.log(data)
        // this.socket.emit('chat', {msg: 'i had got the news'})  // this指向报错
      })
      this.socket.emit('chat', {msg: 'i had got the news'})
    }
  }
}
</script>

<style lang="scss" scope>
/*base*/
body,div,ul,li,h3,h4,h5,form,input,button,textarea,p {margin: 0;padding: 0;font-family: "Microsoft YaHei";font-size: 12px;border:none;}
address,em,strong,h3,h4,h5,i{font-style: normal;font-weight: normal;}
ul,li{list-style: none;}
a{color: black;text-decoration: none;outline: none; -webkit-tap-highlight-color:transparent;}
img{border: 0;}
html{font-size: 40px;background: #ffffff;-webkit-overflow-scrolling: touch;}
body{position:relative;max-width: 750px;min-width: 320px;margin:0 auto;background: #ffffff;}
p{text-align: justify;}

html,body{
  height:100%;
}

.c-talk{
  position: relative;
  box-sizing: border-box;
  max-width:600px;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  border: 1px solid #E6E6E6;
}
.talk-name{
  position: fixed;
  z-index: 99;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  .name{
    width:320px;
    margin: 50px auto 0;
    text-align: center;
    .name-tip{
      margin-bottom: 15px;
      font-size: 15px;
      color: #ffffff;
    }
    .name-title{
      margin-bottom: 20px;
      font-size: 18px;
      color: #ffffff;
    }
    .name-input{
      height:24px;
      padding: 5px 15px;
      outline: none;
      font-size: 18px;
      color: #01aefb;
      background: rgba(0,0,0,0);
      border-bottom: 1px solid #ffffff;
    }
  }
}
.talk-cont{
  padding: 5px 5px 100px;
  .mes-li{
    position: relative;
    overflow: hidden;
    margin-bottom:10px;
    .li-head{
      width:40px;
      height:40px;
      border-radius: 40px;
      img{
        width:40px;
        height:40px;
        border-radius: 40px;
      }
    }
    .li-box{
      max-width: 75%;
      overflow: hidden;
      .box-name{
        font-size: 14px;
        color: #01aefb;
        .time{
          display: inline-block;
          color: #b8b8bb;
        }
      }
      .box-mes{
        display: inline-block;
        padding: 3px 10px;
        font-size:15px;
        background: #42c5ff;
        border-radius: 4px;
      }
    }
  }
  .mes-li-left{
    .li-head{
      float: left;
      margin-right:8px;
    }
    .li-box{
      .box-name{
        .time{
          margin-left: 10px;
        }
      }
    }
  }
  .mes-li-right{
    .li-head{
      float: right;
      margin-left:8px;
    }
    .li-box{
      float: right;
      .box-mes{
        float: right;
      }
      .box-name{
        text-align: right;
        .time{
          margin-right:10px;
        }
      }
    }
  }
  .mes-li-center{
    text-align: center;
    .li-text{
      display: inline-block;
      padding: 4px 10px;
      font-size: 13px;
      color: #b8b8bb;
      border-radius: 5px;
      background:#f3f4f5;
    }
  }
}
.talk-edit{
  position: fixed;
  bottom: 1px;
  width: 100%;
  height: 90px;
  max-width:598px;
  background: #ffffff;
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  .edit-text{
    box-sizing: border-box;
    width:100%;
    padding:5px;
    height:60px;
    font-size:15px;
    border: none;
    resize: none;
    outline: none;
  }
  .edit-btn{
    width: 100%;
    overflow: hidden;
    .btn-a{
      float: right;
      margin: 0 5px;
      padding: 3px 15px;
      color: #ffffff;
      border-radius: 4px;
      background: #42c5ff;
      &:active{
        background: #168af3;
      }
    }
  }
}


</style>
