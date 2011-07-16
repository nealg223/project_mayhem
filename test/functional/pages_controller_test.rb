require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get program" do
    get :program
    assert_response :success
  end

  test "should get staff" do
    get :staff
    assert_response :success
  end

  test "should get community" do
    get :community
    assert_response :success
  end

  test "should get videos" do
    get :videos
    assert_response :success
  end

  test "should get apply" do
    get :apply
    assert_response :success
  end

end
