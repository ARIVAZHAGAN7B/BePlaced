import React from 'react'
import ReactLogo from "../../assets/reactlogo.png"
import NodeLogo from "../../assets/node.png"
import MongoDBLogo from "../../assets/mongodb.png"
import ExpressLogo from "../../assets/expressLogo.png"
const Companies = () => {
    const images = {
        React:ReactLogo,
        NodeJs:NodeLogo,
        MongoDB:MongoDBLogo,
        Express:ExpressLogo
    }
    const companies = {
        "1": {
            companyName: "Google",
            companyLogo: "https://logo.clearbit.com/google.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "2": {
            companyName: "Microsoft",
            companyLogo: "https://logo.clearbit.com/microsoft.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "3": {
            companyName: "Apple",
            companyLogo: "https://logo.clearbit.com/apple.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "4": {
            companyName: "Amazon",
            companyLogo: "https://logo.clearbit.com/amazon.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "5": {
            companyName: "Facebook",
            companyLogo: "https://logo.clearbit.com/facebook.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "6": {
            companyName: "Tesla",
            companyLogo: "https://logo.clearbit.com/tesla.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "7": {
            companyName: "Netflix",
            companyLogo: "https://logo.clearbit.com/netflix.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "8": {
            companyName: "Twitter",
            companyLogo: "https://logo.clearbit.com/twitter.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "9": {
            companyName: "LinkedIn",
            companyLogo: "https://logo.clearbit.com/linkedin.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        },
        "10": {
            companyName: "Adobe",
            companyLogo: "https://logo.clearbit.com/adobe.com",
            skillset:["React","Express","MongoDB","NodeJs"]
        }
        };
    const companiesArray = Object.values(companies);

  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",width:"100%",margin:"10px",backgroundColor:"white"}}>
            <h1 className='titles'>Top Companies You Can Offer</h1>
        </div>
      <div className='companies' style={{  display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',padding: '16px',gap:"20px", justifyContent:"space-around"}}>
        {
            companiesArray.map((company,index) => (
                <div key={index} style={{display:"flex",flexDirection:"column",backgroundColor:"white",border:"5px",borderRadius:"10px",cursor:"pointer"}}>
                    <div style={{display:"flex",justifyContent:"center",padding:"5px 7px"}}>
                        <h1>{company.companyName} </h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={company.companyLogo} alt='companyLogo' style={{marginBottom:"20px"}}/>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:'repeat(3,1fr)',paddingLeft:"5px",paddingRight:"5px"}}>
                        {company.skillset.map((skill,index1) => (
                            <div style={{display:"flex",alignItems:"center",backgroundColor:"rgb(244, 242, 238",borderRadius:"15px",margin:"2px",justifyContent:"center",height:"30px"}}>
                                <img src={images[skill]} style={{height:"20px",marginRight:"5px"}}/>
                                <h5>{skill}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Companies
