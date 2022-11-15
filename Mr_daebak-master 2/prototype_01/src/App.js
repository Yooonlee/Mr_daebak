import React, {Component} from "react";
import styled from "styled-components";
//Page
// import MainPage from "./component/page/MainPage";
// import EmployeePage from "./component/page/EmployeePage";
// import Login from './component/modal/LogIn';
//css
import "./component/ui/Common.css"

// 리액트 라우터 돔에서 필요한 기능들을 불러오기.
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// 컴포넌트들을 불러오기.
import MainPage from './component/page/MainPage';
import LoginPage from './component/page/LoginPage';
import RegisterPage from './component/page/RegisterPage';

function App() {

  // 전체 컴포넌트를 Router 태그 안에 넣어주고 Route들을 Switch 태그로 감싸준다.

  return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage/>} />
					<Route path="/login" element={<LoginPage/>} />
					<Route path="/register" element={<RegisterPage/>} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;



