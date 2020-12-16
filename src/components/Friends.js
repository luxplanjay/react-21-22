import { useState, useMemo } from 'react';

const initalFriends = [
  'Kolby Thompson',
  'Jean Santiago',
  'Ireland Bautista',
  'Thaddeus Campos',
  'Drew Nixon',
  'Van Garrett',
  'Brycen Montoya',
  'Maurice Cordova',
  'Joseph Harris',
  'Kadyn Robinson',
  'Shayna Olson',
  'Hector Cole',
  'Chandler Heath',
  'Eileen Whitaker',
  'Rene Preston',
  'Terrence Lee',
  'Angel Powell',
  'Haiden Pollard',
  'Nina Gentry',
  'Keyla Rich',
  'Darren Ali',
  'Angeline Snow',
  'Jazmyn Henry',
  'Amiyah Donaldson',
  'Craig Lutz',
  'Heath Hobbs',
  'Marley Castillo',
  'Milton Mata',
  'Helena Ponce',
  'Jasmin Manning',
  'Jayla Stephens',
  'Anahi Gomez',
  'Caylee Holmes',
  'Jeffrey Quinn',
  'Travis George',
  'Kamari Church',
  'Makaila Harrell',
  'Adam Duke',
  'Mckinley Fitzpatrick',
  'Mya Spencer',
  'Heidi Morton',
  'Nyasia Guzman',
  'Chaim Lowe',
  'Yaretzi Moore',
  'Andrea Mcmillan',
  'Joe Williams',
  'Jaden Thornton',
  'Noemi Hansen',
  'Adolfo Schneider',
  'Yadira Webb',
  'Nathanial Powers',
  'Claire Ramsey',
  'Yadiel Rodgers',
  'Casey Joyce',
  'Abraham Vance',
  'Viviana Clay',
  'Maxwell Calhoun',
  'Sage Rowe',
  'Emerson Beard',
  'Carla Ward',
  'Deacon Larsen',
  'Clay Nash',
  'Ruby Stevenson',
  'Aracely Rojas',
  'Jay Shea',
  'Kameron Sherman',
  'Tanner Avila',
  'Luis Shannon',
  'Kristen Franklin',
  'Rachael Ellison',
  'Matthew Ball',
  'Kaylee Sweeney',
  'Kassidy Madden',
  'Jovanny Brock',
  'Nikolas Davies',
  'Braiden Poole',
  'Carleigh Hodge',
  'Sonia Hester',
  'Cash Winters',
  'Elsie Melton',
  'Roberto Camacho',
  'Nick Chavez',
  'Efrain Ballard',
  'Derick Archer',
  'Gabriel Horton',
  'Hadley Barr',
  'Anabel Underwood',
  'Leila Kerr',
  'Ross Carney',
  'Amber Rowe',
  'Nathen Franklin',
  'Oliver Harvey',
  'Gavin Torres',
  'Scott Lambert',
  'Zane Hardy',
  'Cody Waller',
  'Angelique Shannon',
  'Nathaly Mckenzie',
  'Kaylee Pittman',
  'Gracelyn Suarez',
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initalFriends);
  const [filter, setFilter] = useState('');

  // const visibleFriends = useMemo(() => {
  //   console.log('Фильтруем друзей ' + Date.now());
  //   return friends.filter(friend => friend.toLowerCase().includes(filter));
  // }, [filter, friends]);

  const visibleFriends = friends.filter(friend =>
    friend.toLowerCase().includes(filter),
  );

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
