import React from 'react'
import UpperBox from './UpperBox/UpperBox';
import TableBox from './Table/TableBox';
import SideBar from '../SideBar/SideBar';

function RightBox() {
  return (
    <>  <div id="layoutSidenav">
      <SideBar/>
      <UpperBox/>
          <div id="layoutSidenav_content">
                  <main>
                      <div class="container-fluid px-4">
                      <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                          
                          <TableBox/>

                      </div>
                  </main>
                  
          </div>
        </div>
    </>
  );
}


export default RightBox;
