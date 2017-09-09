require "#{Rails.root}/app/services/sentence_service"


class QuiplrrController < ApplicationController
  def index
    @quote = Quote.new
  end

  def generate
    quiplrr = SentenceService.new
    @quote = Quote.create(quote: quiplrr.generate_sentence(params[:source]), source: params[:source].capitalize)
    respond_to do |format|
      format.html { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
      format.js { render json: {quote: @quote.quote, source: @quote.source, url: @quote.url}.to_json }
    end
  end

  def show
    @quote = Quote.find_by(url: params[:url])
  end
end