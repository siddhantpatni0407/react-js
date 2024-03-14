import React from 'react';

export default function About() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-primary">
                        <div className="card-header bg-primary text-white">
                            <h4>About Us</h4>
                        </div>
                        <div className="card-body">
                            <p className="lead">Welcome to our File Storage System application!</p>
                            <p>
                                This is Front end application built in ReactJS for File Storage System and integrated with Sprint boot backend application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
