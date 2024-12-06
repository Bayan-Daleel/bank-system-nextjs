import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const logIn ={firstname :'Bayan'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='welcome'
          user={logIn && logIn.firstname || 'Bayan'} 
          subtext='access and manage your account and translations effects'
           />
           <TotalBalanceBox
           accounts={[]} 
           totalBanks={1}
           totalCurrentBalance={1250.25}
           />
      </header>
      </div>
    </section>
  )
}

export default Home 
