import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Table from './components/Table';
import Row from './components/Row';

export default function Routes() {
    return (
        <Switch>
            <Route path = '/' exact component = {Table}/>
            <Route path = '/row' exact component = {Row}/>
        </Switch>

    )
}
