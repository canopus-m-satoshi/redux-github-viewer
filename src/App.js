import { Route, Routes } from 'react-router-dom'
import Top from './pages/Top'
import Profile from './pages/Profile'
import Issue from './pages/Issue'
import PullRequest from './pages/PullRequest'
import Header from './components/organisms/Header'
import Container from './container/Container'
import { styled } from 'styled-components'
import ModalWrapper from './components/organisms/ModalWrapper'
import { useState, useEffect, useRef } from 'react'

const Wrapper = styled.div`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

function App() {
  const [isMenuShow, setIsMenuShow] = useState(false)
  const menuRef = useRef(null)

  const handlePageLink = () => {
    setIsMenuShow(false)
  }

  const handleMenu = () => {
    setIsMenuShow(!isMenuShow)
  }

  /**
   * ハンバーガーメニュー以外の要素をクリックでハンバーガーメニューを閉じます
   * el : HamburgerMenu (button)
   * e.target : クリックされた要素
   * contains() : Nodeインターフェイスのメソッド。あるノードが指定されたノードの子孫であるか、このノード自体であるか、
   * 直接の子ノード (childNodes) の何れかであるか、直接の子ノードの子ノードの何れかであるかを示す論理値を返す。
   *
   * 参考サイト：https://hirakublog.com/react-click-outside/
   * contains() : について→https://developer.mozilla.org/ja/docs/Web/API/Node/contains
   */
  // TODO: 記述位置をHamburger.jsxに変更する
  useEffect(() => {
    const el = menuRef.current

    const handleOutsideMenu = (e) => {
      console.log(e.target)
      // elにクリックされた要素(e.target)が含まれていなかったらハンバーガーメニューを閉じる
      el.contains(e.target) || setIsMenuShow(false)
    }

    document.addEventListener('click', handleOutsideMenu)
  }, [])

  return (
    <div className="App">
      <Wrapper>
        <Header handleMenu={handleMenu} handlePageLink={handlePageLink} isMenuShow={isMenuShow} menuRef={menuRef} />
        <Container>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/issue" element={<Issue />} />
            <Route path="/pull-request" element={<PullRequest />} />
          </Routes>
        </Container>
        <ModalWrapper />
      </Wrapper>
    </div>
  )
}

export default App
