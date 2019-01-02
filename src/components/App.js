import React, { Component } from 'react';
import '../css/App.css';
import menuimg from '../img/Menu.png'
import search from '../img/search.png'
import lion from '../img/Lion Artboard.png'
import imgacc from '../img/NotReg.png'
import exit from '../img/Exit.png'

class App extends Component {

  render() {
    return (
      <div className="App">
        <input type="checkbox" id="checkbox1" class="gf" hidden></input>
        <section className="bar">
          <nav>
            <ul className="barlist">
              <li className="bar__exit">
                <div>
                  <label className='close' for="checkbox1"><img className="exit" src={exit}></img></label>
                </div>
              </li >
              <li className="bar__logo">
                <p className="logoname">SIGHT<br /><span className='logocolor'>LIONS</span></p>
              </li>
              <li className="bar__acc">
                <img className="acc" src={imgacc}></img>
                <p className="notreg">Не авторизован</p>
              </li>
              <li className="bar__list">
                <a href="#">Профиль</a>
              </li>
              <li className="bar__list">
                <a href="#">Достижения</a></li>
              <li className="bar__list">
                <a href="#">Рейтинги</a>
              </li>
              <li className="bar__list">
                <a href="#">Оплата</a>
              </li>
              <li className="bar__reg">
                <a href="#" className="reg">Регистрация</a>
              </li>
              <li className="bar__reg">
                <a href="#" className="login">Вход</a>
              </li>
            </ul>
          </nav>
        </section>


        <header className="header">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">

              <div className="col-lg-1 d-flex justify-content-start">
                <label for="checkbox1"><img className="menuimg" src={menuimg} /></label>
              </div>

              <div className="col-lg-3">
                <nav>
                  <ul className="menu d-flex justify-content-around">
                    <li className="menu__item">
                      <a href="#">Квесты</a>
                    </li>
                    <li className="menu__item">
                      <a href="#">Локации</a>
                    </li>
                    <li className="menu__item last">
                      <a href="#">Карта</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-lg-2 d-flex justify-content-center">
                <a className="logoname" href="#">SIGHT<span className="logocolor">LIONS</span></a>
              </div>

              <div className="col-lg-3">
                <nav>
                  <ul className="menu d-flex justify-content-around">
                    <li className="menu__item first">
                      <a href="#">Рейтинг</a>
                    </li>
                    <li className="menu__item">
                      <a href="#">Контакты</a>
                    </li>
                    <li className="menu__item">
                      <a href="#">О нас</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 d-flex justify-content-end">
                <img className="search" src={search} />
              </div>
            </div>

          </div>
        </header>

        <section className="registration">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 offset-lg-4 forms">
                <div className="col-lg-12">
                  <p className="registrations">Регистрация</p>
                </div>
                <form id="regf" action="#" className="form ">
                  <input type="name" placeholder="Имя" className="form__input" required></input>
                  <input type="first_name" placeholder="Фамилия" className="form__input" required></input>
                  <input type="email" placeholder="E-mail" className="form__input" required></input>
                  <input type="password" placeholder="Пароль" className="form__input" required></input>
                </form>
                <div className="col-lg-12 d-flex justify-content-center">
                  <button type="submit" className="form__btn" form="regf">ГОТОВО</button>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1  ">
                <img className="lion" src={lion}></img>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-lg-6 d-flex justify-content-center footer__soc">
                <p className="social">Наши социальные сети</p>
                <a href="#" className="footer__item">Instagram</a>
                <a href="#" className="footer__item">VKontakte</a>
                <a href="#" className="footer__item">Twitter</a>
              </div>
              <div className="col-lg-4 d-flex justify-content-center footer__tel">
                <p className="social">По всем вопросам</p>
                <p className="social__tel">+7(999) 887 - 12 - 35</p>
              </div>
            </div>

          </div>
        </footer>
      </div >
    );
  }


}

export default App;
