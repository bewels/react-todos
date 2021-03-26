import React from 'react';

import styled from 'styled-components';

import Header from '../header';
import FormAdd from '../form-add-item';
import PostForm from '../add-list';
import NavMenu from '../navigation';
import Footer from '../footer';

const Wrapper = styled.div`
    display: grid;
    grid-row: repeat(3, 1fr);
    justify-items: center;
`
const Container = styled.div`
    width: 50%;
    margin: 20px 0;
`

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                // {label: '123', id: 'test', select: true},
                // {label: '123', id: 'test2', select: false},

            ],
            args: ''
        }
        this.maxId = 0

    }

    postAddItem = (body) => {
        const newPost  = {
            label: body.toUpperCase(),
            id: ++this.maxId,
            select: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newPost]
            return {
                data: newArr
            }
        })
    }

    onSelect = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = {...data[index]}
            const newItem = {...data[index], select: !old.select}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onClear = () => {
        this.setState(({data}) => {
            const newArr = data.filter(item => !item.select)
            return{
                data: newArr
            }
        })
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    // onSelectAll = () => {
    //     this.setState(({data}) => {
    //         const newArr = data.map(item => {
    //             const select = item.select
    //             const newItem = {...item, select: !select}
    //             return newItem
    //         })
    //         console.log(newArr);
    //         return{
    //             data: newArr
    //         }
    //     })
    // }
    crateArgs = (args) => {
        console.log(args);
        this.setState({args})
    }
    onTabs = (arg, items) => {
            if (arg === 'Active') {
                return items.filter(item => !item.select)
            } else if (arg === 'Computed') {
                return items.filter(item => item.select)
            } else {
                return items
            }
    }

    render () {
        const {data, select, args} = this.state;
        const quaData = data.length
        const visibleItems = this.onTabs(args, data)
        return (
            <Wrapper>
                <Header />
                <Container>
                    <FormAdd postAddItem={this.postAddItem} selectAll={this.onSelectAll}/>
                    <PostForm post={visibleItems} onSelect={this.onSelect} onDelete={this.onDelete} select={select}/>
                    <NavMenu post={data} onClear={this.onClear} quaData={quaData} crateArgs={this.crateArgs}/>
                </Container>
                <Footer />
            </Wrapper>
        )
    }
}
