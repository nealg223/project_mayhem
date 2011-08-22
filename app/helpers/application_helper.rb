module ApplicationHelper
  def active_link_to(title, path)
    link_to title, path, 
      :class => (current_page?(path) ? 'active' : '')
  end
end
