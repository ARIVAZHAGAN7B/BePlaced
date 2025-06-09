import React from 'react'

const Companies = () => {
    const companies = {
        "1": {
            companyName: "Google",
            companyLogo: "https://logo.clearbit.com/google.com"
        },
        "2": {
            companyName: "Microsoft",
            companyLogo: "https://logo.clearbit.com/microsoft.com"
        },
        "3": {
            companyName: "Apple",
            companyLogo: "https://logo.clearbit.com/apple.com"
        },
        "4": {
            companyName: "Amazon",
            companyLogo: "https://logo.clearbit.com/amazon.com"
        },
        "5": {
            companyName: "Facebook",
            companyLogo: "https://logo.clearbit.com/facebook.com"
        },
        "6": {
            companyName: "Tesla",
            companyLogo: "https://logo.clearbit.com/tesla.com"
        },
        "7": {
            companyName: "Netflix",
            companyLogo: "https://logo.clearbit.com/netflix.com"
        },
        "8": {
            companyName: "Twitter",
            companyLogo: "https://logo.clearbit.com/twitter.com"
        },
        "9": {
            companyName: "LinkedIn",
            companyLogo: "https://logo.clearbit.com/linkedin.com"
        },
        "10": {
            companyName: "Adobe",
            companyLogo: "https://logo.clearbit.com/adobe.com"
        }
        };
    const companiesArray = Object.values(companies);

  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",width:"100%",margin:"10px",backgroundColor:"white"}}>
            <h1 className='titles'>Top Companies You Can Offer</h1>
        </div>
      <div className='companies'>
        {
            companiesArray.map((company,index) => (
                <div key={index} style={{}}>
                    {company.companyName} 
                    <img src={company.companyLogo} alt='companyLogo'/>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Companies
