import { useFetchMovieByCast } from 'hooks';
import { Loader } from 'components';
import { CastList } from 'components';

export const CastPage = () => {
  const { casts, loading, error } = useFetchMovieByCast();
  //   console.log('first', casts);
  return (
    <main>
      {!error && (
        <section>
          {loading && <Loader />}
          {casts.length !== 0 ? (
            <CastList casts={casts} />
          ) : (
            <p>No information</p>
          )}
        </section>
      )}
    </main>
  );
};
