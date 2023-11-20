import React, { Component } from 'react'
import './css/maizuo.css'
import Film from './maizuo/Film'
import Cinemer from './maizuo/Cinemer'
import Center from './maizuo/Center'

export default class Option extends Component {
    state = {
        list: [{
            id: 1,
            mytetx: "电影"
        },
        {
            id: 2,
            mytetx: "电影院"
        },
        {
            id: 3,
            mytetx: "我的"
        }
        ],
        current: 0

    }

    witch() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinemer></Cinemer>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }
    render() {
        return (
            <div>
                {
                    this.witch()
                }
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={this.state.current === index ? 'active' : ''}
                                onClick={() => { this.handleClick(index) }}
                            > {item.mytetx} </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        console.log(index)
        this.setState({
            current: index
        })
    }

}
