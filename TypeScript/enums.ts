enum Directions {
  Up,
  Down,
  Left,
  Right
}

Directions.Up;        // 0
Directions.Down;      // 1
Directions.Left;      // 2
Directions.Right;     // 3


// Reverse enum
enum Directions2 {
  Up,
  Down,
  Left,
  Right
}

Directions2[0];     // 'Up'
Directions2[1];     // 'Down'
Directions2[2];     // 'Left'
Directions2[3];     // 'Right'


// Custom index for enum elements
enum Directions3 { 
  Up = 2,
  Down = 4,
  Left = 6,
  Right = 8
}

Directions3.Up;     // 2
Directions3.Down;   // 4
Directions3[6];     // 'Left'
Directions3[8];     // 'Right'


// Custom name for keys
enum Links {
  youtube = 'https://www.youtube.com/',
  vk = 'https://www.vk.com/',
  facebook = 'https://www.facebook.com/'
}

// Using
Links.youtube   // 'https://www.youtube.com/'



/*
  Самое годное применение enum это ограниченный набор значений каких либо параметров, 
  хороший пример дни недели или название месяцев, либо например роль user в 
  сервисе - enum Role { Admin, Manager, Client }, а затем присваиваешь пользователям 
  одно из этих значений например user.role = Role.Manager, и затем в том месте где 
  разным пользователям разрешаются действия в зависимости от роли ты проверяешь какая 
  у него роль - if(user.role === Role.Manager){ //access }, такое использование намного 
  лучше и очевиднее и безопаснее чем например user.role = 'admin', исключает опечатку,
  задаёт регламент для командной разработки и т.д., 
  тоже самое и с днями недели, месяцами, городами, странами, цветами, и т.д. и т.п.
*/