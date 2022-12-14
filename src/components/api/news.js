import axios from 'axios';

async function getCompanyNews(jwt, symbol) {
  const url = process.env.REACT_APP_NEWS_URL || 'http://localhost:1337/api/newsstocks';
  const fullUrl = `${url}?symbol=${symbol}`;
  const result = await axios.get(fullUrl, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  const dataArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of result.data.data) {
    dataArray.push(item.attributes);
  }
  return dataArray;
}

function newsCleanup(result) {
  const rows = result.data.data;
  const results = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const row of rows) {
    try {
      const item = {
        news_on: row.attributes.created_at,
        headline: row.attributes.headline,
        summary: row.attributes.summary,
        sentiment: row.attributes.sentiment === undefined ? 0 : row.attributes.sentiment,
        url: row.attributes.url,
        symbols: row.attributes.symbols.toString()
      };
      results.push(item);
    } catch (e) {
      console.log('error: ', e, '  ', row);
    }
  }
  return results;
}

async function getTop10News(jwt) {
  const url = process.env.REACT_APP_NEWS_TOP10_URL || 'http://localhost:1337/api/newsitems';
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  const news = newsCleanup(result);
  return news;
}

export { getCompanyNews, getTop10News };
