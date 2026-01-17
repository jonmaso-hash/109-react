import {useState} from 'react'
import './About.css'


function About(){
    const [isEmailVisiable, setisEmailVisable] = useState(true)

    function showEmailInformation(){
        setisEmailVisable(true)
    }

    function hideEmailInformation(){
        setisEmailVisable(false)

    }

return(
    <div>
    <h1>About Us</h1>
    <p className='mb-5'>"Our goods aren't just Funny, they're Punny! We specalize in non-stale consummables."</p>
    <p>
We’ll keep it short and sweet: we design awesome products to make your kitchen a laugh factory! 

We don't just make "instagrammable" products, we make food with feelings. Why eat boring, when you can eat funny. 
</p>

<h3> Concerns or inquries contact us here: </h3>
    {
        isEmailVisiable == true
      ? <p className = "text-primary fs-5">punnyfood@eatyourfeeling.com</p>
      : <p className= "text-secondary fs-5"> Click button belwo to see email address</p>
    }

    <button className="btn btn-primary me-2" onClick={hideEmailInformation}> Hide my email</button>
    <button className= "btn btn-dark" onClick={showEmailInformation}> Show my email </button>


    </div>
)
}

export default About