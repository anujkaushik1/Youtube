const GOOGLE_API_KEY = "AIzaSyDif_5YdtGjBPDs9hQIW0v8ltgkNsl-n-g";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";





  export function getPrime(n) {
      var P = 0;
  
      function isPrime(x) {
          var isPrime= true;
  
          for (var d = 2; d <= Math.sqrt(x); d++) {
              if((x/d) % 1 == 0) {
                  isPrime = false;
                  break;
              }
          }
  
          return isPrime;
      }
  
      for (var i = 1; 0 < n; i++) {
  
          if(isPrime(i)) {
              P = i; n--;
          }
  
          // we can skip the even numbers
          if(3 <= i){
              i++;
          }
  
      }
  
      return P;
  }