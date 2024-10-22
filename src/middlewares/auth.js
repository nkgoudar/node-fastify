export default function (request, reply, done) {
  console.log("Middleware invoked!");
  done();
}
