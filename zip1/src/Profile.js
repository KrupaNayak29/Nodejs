import React from "react"
export default function Profile() {
  const auth = localStorage.getItem("user")
  return (
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 p-2 text-center ">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid"/>
              <h6 className="p-3"> <b>{JSON.parse(auth).name} </b></h6>
              <i class="far fa-edit mb-5"></i>
            </div>
            
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col mb-5">
                    <h6>Email</h6>
                    <p class="text-muted"> {JSON.parse(auth).email} </p>
                  </div>
                
                </div>
                <h6>User ID</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col mb-3">
                    <p class="text-muted text-content-center">{JSON.parse(auth)._id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
