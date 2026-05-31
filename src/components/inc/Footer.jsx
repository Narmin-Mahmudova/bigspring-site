import React from 'react'
import logoImg from '../../assets/logo.png';


function Footer() {
  return (
      <>
      
          <footer className="p-6" style={{ backgroundColor: 'rgb(238, 249, 249)' }}>
            <div className='m-14'>
              <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                  <div className="flex flex-col space-y-4">
                      <h2 className="font-medium">Company</h2>
                      <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                          <a rel="noopener noreferrer" href="#">Pricing</a>
                          <a rel="noopener noreferrer" href="#">Quick Start</a>
                      </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                      <h2 className="font-medium">Product</h2>
                      <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                          <a rel="noopener noreferrer" href="#">Features</a>
                          <a rel="noopener noreferrer" href="#">Platform</a>
                          <a rel="noopener noreferrer" href="#">Pricing</a>
                      </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                      <h2 className="font-medium">Support</h2>
                      <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                          <a rel="noopener noreferrer" href="#">FAQ</a>
                          <a rel="noopener noreferrer" href="#">Privacy Policy</a>
                          <a rel="noopener noreferrer" href="#">Terms&Conditions</a>
                      </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                      <img src={logoImg} alt="logo" />
                      <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                          <p>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
                      </div>
                  </div>
              </div>
              <div className="flex items-center justify-center px-6 pt-12 text-sm">
                  <span className="dark:text-gray-600">Designed and Developed By Themefisher • Distributed by ThemeWagon</span>
              </div>
            </div>
          </footer>
      </>
  )
}

export default Footer