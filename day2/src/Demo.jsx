import img1 from './Image/workplace.jpg'
function Demo() {
    return (
        <div>
        <h1>React 1st Assignment</h1>
        <img src={img1} alt="Image Demo" class="photo">
        </img>
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>

        <button onclick={callFun}>Click Me !</button>

        </div>
    )
}
function callFun(){
    alert("Function Called")
}

export default Demo