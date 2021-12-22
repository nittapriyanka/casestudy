import logo from './logo.svg';
import './App.css';
import MyCom from './MyCom';
import MyClassComponent from './MyClassComponent';
import PropsExample from './PropsExample';
import StateExample from './StateExample';
import ClassCounter from './ReactHookExample/ClassCounter';
import HookCounter from './ReactHookExample/HookCounter';
import NameList from './NameList';
import RegisterForm from './RegisterForm';
import ColumnComponent from './ColumnComponent';
import TableComponent from './TableComponent';
import UpdateComponent from './HigherOrderComponent/UpdateComponent';
import AnotherFile from './HigherOrderComponent/AnotherFile';
import ClickCounterButton from './HigherOrderComponent/ClickCounterButton';
import GetReactData from './ReactHookExample/GetReactData';
import GetTaskdata from './ReactHookExample/GetTaskdata';
import PostExample from './PostExample';
import About from './About';
import React from 'react'
import CakeContainer from './Redux/CakeContainer';
import store from './Redux/store';
import {Provider} from 'react-redux'
import CounterOne from './CounterOne';
import ClassuseEffect from './ClassuseEffect';
import HookuseEffectCounter from './HookuseEffectCounter';
import CountHook from './CountHook';
import PostTask from './PostTask';
import {Route,Link,BrowserRouter as Router,Routes, BrowserRouter,Switch} from 'react-router-dom'

import SetPriority from './SetPriority';
import SetStatus from './SetStatus';
import AssignTask from './AssignTask';
import SetNotes from './SetNotes';
import SetDescription from './SetDescription';
import SearchTask  from './SearchTask'
import Navbar from './Navbar';
import Deletetask from './Deletetask';
import SearchStatus from './SearchStatus';
import SetBookmark from './SetBookmark';
import SearchPriority from './SearchPriority';
import SearchTname from './SearchTname';
//import "../node_modules/bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <Provider store={store}>
      
      <div>
        <SearchTname></SearchTname>
        <SearchPriority></SearchPriority>
        <SetBookmark></SetBookmark>
        <SearchStatus></SearchStatus>
        <Deletetask></Deletetask>
       <SearchTask></SearchTask>
        <SetDescription></SetDescription>
        <SetNotes></SetNotes>
        <AssignTask></AssignTask>
        <SetStatus></SetStatus>
        <SetPriority></SetPriority>
        <PostTask></PostTask>
     < GetTaskdata></GetTaskdata>

        

       
      {/*  <CountHook></CountHook>
        <HookuseEffectCounter></HookuseEffectCounter>
        <ClassuseEffect></ClassuseEffect>
        {/*<CakeContainer />
        <CounterOne></CounterOne>
        {/* <MyCom></MyCom>
      <About></About>
      <StateExample></StateExample>
      <PostExample></PostExample>

      <GetTaskdata></GetTaskdata>
      <GetReactData></GetReactData>
      {/*
      <ClickCounterButton></ClickCounterButton>
      <AnotherFile></AnotherFile>

      <TableComponent></TableComponent>
      <ColumnComponent></ColumnComponent>
      <br></br>
      <RegisterForm></RegisterForm>
     <NameList></NameList>
      <ClassCounter></ClassCounter>
      <HookCounter></HookCounter>
      <StateExample></StateExample>
      <MyCom></MyCom>
      <MyClassComponent></MyClassComponent>
    <PropsExample></PropsExample>*/}
    

      </div>
    

    </Provider>
    
  )
    
  
}

export default App;
