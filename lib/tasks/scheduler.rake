desc "This task is called by the Heroku scheduler to post tweets"
task :post_tweet => :environment do
  quiplrr = SentenceService.new
  sent = false
  until sent
    tweet = quiplrr.generate_sentence('shakespeare')
    if tweet.length <= 140
      tweeter = TweetService.new
      tweeter.post_tweet(tweet)
      sent = true
    end
  end
end
