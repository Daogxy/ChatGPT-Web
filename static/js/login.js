// 假设管理员的用户ID和密码 (在实际应用中，您应该使用环境变量或后端验证来处理这些敏感信息)
const ADMIN_USER_ID = 'zxy13899';
const ADMIN_PASSWORD = '5653135';

// login.js

$(document).ready(function() {
    $('#toggle-setting-btn').click(function() {
        // Assuming toggle_settings_dialog() is a function that shows the login form
        toggle_settings_dialog();
    });

    // Handle the login logic when the login button is clicked
    $('#login-btn').click(function() {
        var userId = $('#user-id').val();
        var password = $('#password').val();

        // Check if the admin credentials are provided
        if (userId === ADMIN_USER_ID && password === ADMIN_PASSWORD) { // Replace with your admin credentials
            // If admin, show the registration form
            $('#admin-panel').show();
            toggle_settings_dialog(); // Close the login form dialog
        } else {
            // If not admin, handle normal user logic (such as validating normal user credentials)
            alert('Invalid login credentials');
        }
    });

    // Handle the registration logic when the registration button is clicked
    $('#register-user-btn').click(function() {
        // Implement AJAX request to server to register new user...
    });
});