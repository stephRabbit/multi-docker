const keys = require('./keys')
const redis = require('redis')

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  // Retry if connection is lost once every 1s
  retry_strategy: () => 1000
})

const sub = redisClient.duplicate()

// Fibonacci sequence with recursion
// to simualate bit of latency
function fib(index) {
  if (index < 2) return 1
  return fib(index - 1) + fib(index - 2)
}

// Watch redis for new value and run fib()
sub.on('message', (channel, message) => {
  // when new value is received calculate fib value
  // insert it into a hash called 'values'
  // message - index
  redisClient.hset('values', message, fib(parseInt(message)))
})

// On insert get value and attempt to calculate fib for it
// and add it back to redis instance
sub.subscribe('insert')
