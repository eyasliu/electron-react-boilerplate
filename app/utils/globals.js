import { Component, PropTypes } from 'react';
import {combineReducers, bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import Constant from 'react-constant';


window.Component = Component;
window.PropTypes = PropTypes;
window.combineReducers = combineReducers;
window.bindActionCreators = bindActionCreators;
window.compose = compose;
window.connect = connect;
window.Constant = Constant;