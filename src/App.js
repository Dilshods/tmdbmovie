import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import CategoryItem from "./components/categoryid/CategoryItem";
import Newlest from "./components/Newlest";
import Movies from "./pages/movie/Movies";
import Tinto from "./pages/people/Tinto";
import Infomation from "./pages/peopleInfomation/Infomation";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Newlest />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<CategoryItem />} />
          <Route path="/movie/popular" element={<Movies />} />
          <Route path="/movie/now_playing" element={<Movies />} />
          <Route path="/movie/top_rated" element={<Movies />} />
          <Route path="/movie/upcoming" element={<Movies />} />
          <Route path="/tv/popular" element={<Movies />} />
          <Route path="/tv/airing_today" element={<Movies />} />
          <Route path="/tv/on_the_air" element={<Movies />} />
          <Route path="/tv/top_rated" element={<Movies />} />
          <Route path="/person" element={<Tinto />} />
          <Route path="/person/:id" element={<Infomation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
