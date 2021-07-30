//bellow I define how to use my games objects

interface Game {
  id: string | number,
  title: string,
  description: string,
  rate: number,
  link: string,
}

export default Game