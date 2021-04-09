import React, { Component, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './index.less'
// class Two extends Component {
//     // static propTypes = {
//     //   prop: PropTypes
//     // }
//     const url =
//     'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

//   const [image, setImage] = useState(url)

//   const changeAnimal = () => {
//     let dogURL =
//       'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
//     let catURL =
//       'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
//     let result = image === catURL ? dogURL : catURL
//     setImage(result)
//   }

//     render() {
//         return (
// <div className="test">
//     <div className='App'>
//         <h1>30 Days Of React</h1>
//         <div className='animal'>
//             <img src={image} alt='animal' />
//         </div>

//         <button onClick={changeAnimal} class='btn btn-add'>
//             Change
//         </button>
//     </div>
// </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//   list:state.list
// })

// const mapDispatchToProps = {
// }

const Two = () => {

    const url =
        'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    // const ref = useRef(null)
    const ref = useRef(null)

    const [image, setImage] = useState(url)

    const changeAnimal = () => {
        let dogURL =
            'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catURL =
            'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
        let result = image === catURL ? dogURL : catURL
        setImage(result)
    }
    const onTestClick = () => {
        console.log(ref.current)
        console.log(ref.current.value)
        ref.current.focus()
    }

    const onChangeh1 = () => {
        console.log(ref.current)
        ref.current.style.backgroundColor = '#61dbfb'
        ref.current.style.padding = '50px'
        ref.current.style.textAlign = 'center'
    }
    return (
        <div className="two test">
            <div  >
                <h1>30 Days Of React</h1>
                <div className='animal'>
                    <img src={image} alt='animal' style={{ width: '200px', height: '200px' }} />
                </div>
                {/* <input type='text' ref={ref} /> */}
                <button onClick={onTestClick}>333234</button>
                <button onClick={changeAnimal}  >
                    Change
                </button>
                <h1 ref={ref}>How to style HTML from the DOM tree using useRef</h1>
                <button onClick={onChangeh1}> h1 ref</button>
            </div>
        </div>
    )
}

// export default connect(mapStateToProps, mapDispatchToProps)(Apple)
export default
    Two

