import React from 'react';
import Card from "./Card";
import Button from "./Button";



export default function Login() {
  return (
    <div className="Login">
      <h3 className="Login__header">Bienvenue !</h3>
      <Card>
        <Button text="Bienvenue les Men in Black !" />
      </Card>
    </div>
  );
}


