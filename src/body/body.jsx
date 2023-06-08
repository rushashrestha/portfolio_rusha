import './body.css'
import danceMan from '../assets/dance.png'
import CustomButton from '../myComponents/CustomButton'

function Body(props){
    const nameList = [
        "Rusha Shrestha",
        "Mandira Shrestha",
        "Manjila Thapa",
        "Shreeti Bajhrachrya"
    ]
    return (
        <>
        {
            nameList.map(
                (element)=>{
                    return <h2>{element}</h2>
                }
            )
        }
            <div className="body-main">
                <div className="intro">
                    <span>Hello, I am</span>
                    <code><h1 >Rusha Shrestha</h1></code>
                    <h3>Fullstack Developer & Computer Engineer</h3>
                    <p>Remember, the optimal values for these properties will depend on the specific photo and the desired outcome. Experimentation and personal preference play a significant role in achieving the perfect photo editing result. The value of various properties for perfect photo editing in an iPhone can vary depending on the specific requirements and preferences of the user. However, here are some general guidelines:</p>
                    <div className='action'>
                        <CustomButton onClick={()=>console.log("Hire me button clicked")} colorClass="btn-style1" title="Hire Me"></CustomButton>
                        <CustomButton showIcon onClick={()=>console.log("Download button clicked")} id="download" colorClass="btn-style2" title="Download CV"></CustomButton>
                    </div>
                </div>
                <div className="profile">
                    <img src={danceMan}></img>
                </div>
            </div>
        </>
    )
}

export default Body