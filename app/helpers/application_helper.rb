module ApplicationHelper
  def active_link_to(title, path)
    if (current_page?(path))
      link_to title, path, :class => 'active'
    else
      link_to title, path
    end
  end
end
