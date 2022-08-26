// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// export const HomeList = ({ movies }) => {
//   const location = useLocation();
//   return (
//     <ul>
//       {/* {loading && <Loader />} */}
//       {movies.map(({ id, title, poster_path }) => (
//         <li key={id}>
//           <Link to={`/movies/${id}`} state={{ from: location }}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${poster_path}`}
//               alt={title}
//             />
//             <p>{title}</p>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

//  <li key={id}>
//    <Link to={`/movies/${id}`} state={{ from: location }}>
//      <img src={poster_path} alt={title} />
//      <p>{title}</p>
//    </Link>
//  </li>;
