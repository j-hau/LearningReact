const pi = 3.1415962;

function twoPi() {
  return pi * 2;
}

function squarePi() {
  return pi ** 2;
}

export default pi;
{
  /* The default export is pi.
  When you import from another file, without specifying the thing that is imported is the default export.*/
}

export { twoPi, squarePi };

{
  /*This is exporting the extra functions, twoPi and squarePi.
  They are not the default export and need to be specially imported */
}
