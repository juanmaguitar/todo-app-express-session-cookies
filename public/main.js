$('.remove-task').on('click', function(e) {
  const $liContainer = $(this).closest('li')
  const id = $liContainer.data('id')

  const url = `/task/${id}`
  const method = 'DELETE'

  $.ajax({ url, method})
    .then( msg => {
      $liContainer.remove()
      toastr.success(msg)
    })

})

$('.mark-as-done').on('click', function(e) {
  const $liContainer = $(this).closest('li')
  const id = $liContainer.data('id')

  const url = `/task/${id}`
  const method = 'PUT'
  const data = { completed: true }

  $.ajax({ url, method, data })
    .then( msg => {
      $liContainer.addClass('done')
      toastr.success(msg)
    })

})

$('.edit-task').on('click', function(e) {
  const $liContainer = $(this).closest('li')
  const id = $liContainer.data('id')

  $liContainer.addClass('edit-mode')
})

$('.edit-form').on('submit', function(e) {
  e.preventDefault()
  const $liContainer = $(this).closest('li')
  const id = $liContainer.data('id')
  const editedTitle = $(this).find('input').val()

  const url = `/task/${id}`
  const method = 'PUT'
  const data = { title: editedTitle }

  $.ajax({ url, method, data })
    .then( msg => {
      $liContainer.find('span').text(editedTitle)
      $liContainer.removeClass('edit-mode')
      toastr.success(msg)
    })

})

$('.complete-all').on('click', function() {

  const url = `/tasks`
  const method = 'PUT'
  const data = { completed: true }

  $.ajax({ url, method, data })
    .then( response => {
      $('.todo-tasks li').addClass('done')
    })
})