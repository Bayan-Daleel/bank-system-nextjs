import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {
  const logIn ={firstName :'Bayan' , lastName :'Daleel' , email:"bayan.dl96@gmail.com"}
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
          <HeaderBox
          type='greeting'
          title='welcome'
          user={logIn && logIn.firstName || 'Bayan'} 
          subtext='access and manage your account and translations effects'
           />
           <TotalBalanceBox
           accounts={[]} 
           totalBanks={1}
           totalCurrentBalance={1250.25}
           />
        </header>
      <RightSidebar user={logIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:5225}]}/>
     

      </div>
    </section>
  )
}

export default Home 
