import { Wave } from 'react-animated-text';
import { useDispatch } from 'react-redux';
import { Container, Heading, Section } from 'components';
import {
  selectIsLoading,
  selectError,
  selectRates,
  selectBaseCurrency,
} from '../redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLatestSymbols } from '../redux/currency/operations';

import { Loader } from '../components/Loader/Loader';
import { RatesList } from '../components/RatesList/RatesList';
const Rates = () => {
  const dispatch = useDispatch();

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <RatesList rates={rates} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
