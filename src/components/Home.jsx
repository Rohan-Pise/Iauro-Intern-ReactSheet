import React from 'react'
import Login from "./Login"
import styles from"../css-Modules/Home.module.css";
import{useSelector , useDispatch} from 'react-redux'
function Home() {
  const isLogin = useSelector((state)=>state.login.value);
  return (
    <>

    {isLogin ? <div>
      <h1 style={{textAlign:'center'}}>This is Home section 💚
      </h1>
     
      <div className={styles.heading}>
        <h3 className={styles.header}>Here Your content will be shown !!</h3>
      </div>

      <div className={styles.parent}>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/_c9oLrMDPtOW3YHzAtcclA0ZYacZHZo7UJgcxiY06bA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0" alt="shoe-img"/>
          <div class="text-container">
            <p  className={styles['card-text']} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/Lp0Bn7GucwfsMpBn-zUxxw8T3QmI5i47A6U2y3bDOuM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIxLzgxLzg2/LzM2MF9GXzEyMTgx/ODY3M182RUlENWlG/NzZWQ0NjNGFHT0xK/a2Q5NFBobmdncmUz/by5qcGc" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/Lo9QcOtuBM6hL4pchC6T4_2TZUbAP1b4ndYSzr7pXuk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/NDE3NTg2L3Bob3Rv/L2VsZWdhbnQtYmxh/Y2stbGVhdGhlci1z/aG9lcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Y190VGxq/d2J1Mm0wQUd4d2Iy/N054Q2dHMFkyQ3Yt/QzR2OHE2VjM2Ulli/dz0" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/ns3ZmNC_hrQDc6wsb0BtVquMXfCw7bdViwGIfUwgD0I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cGFpci1vZi1uYXZ5/LWJsdWUtc2thdGUt/c2hvZXMuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/7gMJ3KSLYvnPCbUl6_VjKtV1vpApZ0sF0J8xb1LhOFk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzMzLzI1LzI0/LzM2MF9GXzEwMzMy/NTI0MjRfb25LSHZH/QUFuNm92bkMybDg5/Y1JoVXc0eXhISjVv/ekEuanBn" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/Tref6WhdOsSQi95-kaiHPu6j5DzoTb_EeYCRh1mxF3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/NjAzODIyL3Bob3Rv/L3BhaXItb2YtZ3Jl/ZW4tc25lYWtlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVJ3LURLUkNRRkQ0/RnNMbXNUZDltU2tB/QkVLZ3I5RkRoQ1Bk/RGxIODV4a2M9" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}>
          <img src="https://imgs.search.brave.com/C7JeZHV7C0Zec-KiZKKUyswFDSH8M_JQv5Ubr7_FYO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWZhc2hp/b24ubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA1L0d1/Y2NpLVByaW5jZXRv/d24tTG9hZmVycy01/MDB4Mzk1LmpwZw" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div>
        </div>
        <div className={styles.child}> <img src="https://imgs.search.brave.com/oVKOkg_g9K5IQ8BtcpZQqOrOLobf5XCLovUNtCk7qjU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVhdXRpZnVsbGlm/ZS5pbmZvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tb3N0X2V4cGVu/c2l2ZV9zaG9lcy9r/YW55ZV93ZXN0X25p/a2VfYWlyX3llZXp5/XzEuanBn" alt="shoe-img"/>
          <div class="text-container">
            <p className={styles['card-text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quo consequatur magnam sint repudiandae in reprehenderit veniam recusandae ullam fugit!</p>
          </div>
          <div className={styles['btn-div']}>
            <button className={styles['buy-btn']}> Buy Shoes</button>
          </div></div>
       
      </div>

    </div> : <Login/>}
    </>
  )
}

export default Home
