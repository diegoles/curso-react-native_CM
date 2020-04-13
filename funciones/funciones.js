ejecutar = function () {
  console.log("ejecutando...");
  sumar(10, 20);
  restar(10, 20);
  procesar(sumar);
  procesar(restar);
  procesar( (x, y)=> {
    let res = x + y;
    console.log("suma:" + res);
  });

  procesar( (a, b) =>{
      console.log("multiplicar: " + a*b);
  });

  procesar( (i, j) =>{
    console.log( i + ": " +j);
});

};


sumar =  (x, y)=> {
  let res = x + y;
  console.log("suma:" + res);
};

restar =  (x, y)=> {
  let res = x - y;
  console.log("resta:" + res);
};

procesar =  (fn)=> { // esta funcion ejecutar otra funcion
  fn(30, 20); // sumar();
};
