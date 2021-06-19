import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'

function Expenses(props) {

    // const expenses = [
    //     {
    //         id: 'e1',
    //         title: 'Toilet Paper',
    //         amount: 94.12,
    //         date: new Date(2020, 7, 14),
    //     },
    //     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    //     {
    //         id: 'e3',
    //         title: 'Car Insurance',
    //         amount: 294.67,
    //         date: new Date(2021, 2, 28),
    //     },
    //     {
    //         id: 'e4',
    //         title: 'New Desk (Wooden)',
    //         amount: 450,
    //         date: new Date(2021, 5, 12),
    //     },
    // ];

    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>

            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}>

            </ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}>

            </ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}>

            </ExpenseItem>
        </Card>
    )


}


export default Expenses;