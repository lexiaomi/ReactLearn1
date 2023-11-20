import React, { Component } from 'react'

export default class App extends Component {
    myRef = React.createRef()
    state = {
        list: [{
            id: 1,
            mytetx: "1111"
        },
        {
            id: 2,
            mytetx: "222"
        },
        {
            id: 3,
            mytetx: "3333"
        }
        ]
    }
    render() {
        var newList = this.state.list.map(
            (item, index) => <li key={item.id}>{item.mytetx}<button onClick={() => {
                this.handleClickDel(index)
            }}>del</button></li>)
        return (

            <div>
                <input ref={this.myRef} />

                <button onClick={this.handleClick}>add</button>
                <ul>
                    {newList}
                </ul>
                {
                    this.state.list.length === 0 ? <div>暂无待办事项</div> : null
                }

            </div>


        )
    }


    handleClick = () => {
        console.log("handleClick", this.myRef.current.value)
        var newList = [...this.state.list]
        newList.push({
            id: Math.random() * 1000000000,
            mytetx: this.myRef.current.value
        })
        this.setState(
            {
                list: newList
            }
        )
        this.myRef.current.value = ""
    }

    handleClickDel(index) {
        console.log("handleClickDel", index)
        var newList = this.state.list.slice()
        newList.splice(index, 1)
        //删除后需要重新赋值
        this.setState(
            {
                list: newList
            }
        )
    }
}
