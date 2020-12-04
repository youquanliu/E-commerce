const products = [
  {
    name: 'Money Toilet Paper',
    image: '/images/toiletpaper01.jpg',
    description:
      'You can always use dollar bills when you run out of toilet paper…',
    brand: 'Apple',
    category: 'Toliet Paper',
    price: 9.99,
    countInStock: 100,
    rating: 4.5,
    numReviews: 12,
    reviews: {
      name: "Frank",
      comment: "It makes me feel rich",
      createdAt: '2020-12-02T20:29:30.022+00:00',
      rating: 5,
      user: '5fc6ad7427942d344c8f43d2'
    }
  },
  {
    name: 'Cactus Toilet Paper',
    image: '/images/toiletpaper10.jpg',
    description:
      '100% organic for you organic lovers',
    brand: 'Mother Nature',
    category: 'Toliet Paper',
    price: 99,
    countInStock: 20,
    rating: 1,
    numReviews: 14,
  },
  {
    name: 'Yo Mama Toilet Roll',
    image: '/images/toiletpaper11.jpeg',
    description:
      "Get your laugh on in the bathroom when you use the Yo Mama Toilet Roll,Covered in hilarious 'yo mama' jokes, this toilet paper will have you lingering in the loo so you can read some more. Use the Yo Mama Toilet Roll for silly toilet time.",
    brand: 'Yo Mama',
    category: 'Toliet Paper',
    price: 5.29,
    countInStock: 22,
    rating: 3.8,
    numReviews: 9,
  },
  {
    name: 'Save Lives and Underwear With the Emergency',
    image: '/images/toiletpaper12.jpeg',
    description:
      "The Emergency Toilet Roll is the perfect bathroom accessory.This box is laughable and life-saving at the same time.Instead of sheepishly calling for help, you can brazenly break the glass and save your own skin. I'd rather punch through glass than ask for help any day.",
    brand: 'Emergency',
    category: 'Toliet Paper',
    price: 7.99,
    countInStock: 15,
    rating: 5,
    numReviews: 41,
  },
  {
    name: "Educational Toilet Experiences With 'the Things We Didn't Know Loo Roll'",
    image: '/images/toiletpaper13.jpeg',
    description:
      "With the 'Things We Didn't Know Loo Roll,' the toilet is transformed into a comfy seat for reading. Much like a bathroom-based library wound up with information and knowledge. With interesting trivia and quirky jokes, the 'Things We Didn't Know Loo Roll' makes your experience on the john more enjoyable.",
    brand: 'Poo and Learn ',
    category: 'Toliet Paper',
    price: 7,
    countInStock: 12,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'The Gags-Donald Trump Toilet Paper',
    image: '/images/toiletpaper04.jpg',
    description:
      'FUNNY-Laugh with/at Donald Trump with the only humorous toilet paper that’s Made in the USA',
    brand: 'Sony',
    category: 'Toliet Paper',
    price: 39.99,
    countInStock: 110,
    rating: 5,
    numReviews: 12,
  },

  {
    name: 'Maze Puzzle Toilet Paper',
    image: '/images/toiletpaper15.jpeg',
    description:
      "If you've forgotten to bring some reading material into the bathroom while doing your business, this Maze Puzzle Toilet Paper will keep you busy.",
    brand: 'Static Maze',
    category: 'Toliet Paper',
    price: 3,
    countInStock: 10,
    rating: 3.8,
    numReviews: 4,
  },
  {
    name: 'Sudoku Toilet Paper',
    image: '/images/toiletpaper02.jpg',
    description:
      'This creative roll of toilet paper is imprinted with Sudoku puzzles.',
    brand: 'Apple',
    category: 'Toliet Paper',
    price: 5.99,
    countInStock: 70,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Black Toilet Paper',
    image: '/images/toiletpaper03.jpg',
    description:
      'Renova black toilet paper will definitely stand out in any bathroom.',
    brand: 'Cannon',
    category: 'Toliet Paper',
    price: 19.99,
    countInStock: 57,
    rating: 3,
    numReviews: 12,
  },

  {
    name: 'Origami Toilet Paper',
    image: '/images/toiletpaper05.jpg',
    description:
      'While you sit and ponder keep yourself busy with this silly roll of toilet paper with complete instructions on folding your own toilet paper crane.',
    brand: 'Logitech',
    category: 'Toliet Paper',
    price: 4.99,
    countInStock: 77,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Valentine’s Day Toilet Paper',
    image: '/images/toiletpaper06.jpg',
    description:
      'Stock the bathroom with a roll of valentine toilet paper that has hearts printed with safe, water-based inks.',
    brand: 'Amazon',
    category: 'Toliet Paper',
    price: 5.49,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Horror Story Toilet Paper',
    image: '/images/toiletpaper07.jpg',
    description:
      'Japan’s creepiest toilet paper comes with imprinted horror story by Koji Suzuki.',
    brand: 'Suzuki',
    category: 'Toliet Paper',
    price: 15.19,
    countInStock: 22,
    rating: 4,
    numReviews: 11,
  },
  {
    name: 'Notepad Toilet Paper',
    image: '/images/toiletpaper08.jpg',
    description:
      'Cool advertising for the School of Visual Arts encouraged people to “think” by giving them a place to write down their ideas.',
    brand: 'Amazon',
    category: 'Toliet Paper',
    price: 6.99,
    countInStock: 2,
    rating: 2.5,
    numReviews: 16,
  },
  {
    name: 'This Novelty Toilet Paper is Perfect for Hunters and Fishers',
    image: '/images/toiletpaper14.jpeg',
    description:
      "This camouflage novelty toilet paper is perfect for the ultimate redneck. If you love hunting, fishing, the outdoors and camouflage, this novelty toilet paper was made specially just for you.",
    brand: 'Outdoor Supply',
    category: 'Toliet Paper',
    price: 8.29,
    countInStock: 18,
    rating: 4,
    numReviews: 8,
  },
  {
    name: 'Glow in the Dark Toilet Paper',
    image: '/images/toiletpaper09.jpg',
    description:
      'Now you’ll always be able to find the toilet paper, even in the dark.',
    brand: 'Dark',
    category: 'Toliet Paper',
    price: 5.29,
    countInStock: 69,
    rating: 3.5,
    numReviews: 4,
  }, 
  {
    name: 'Test',
    image: '/images/sample.png',
    description:
      'this is a sample item',
    brand: 'Dark',
    category: 'Toliet Paper',
    price: 5.29,
    countInStock: 69,
    rating: 3.5,
    numReviews: 4,
  },

]

export default products
