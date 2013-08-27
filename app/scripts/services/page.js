'use strict';

angular.module('jacobharasimoApp')
    .factory('Page', function (projects) {
        var title = '';
        var NavbarOpen = false;
        var TopNav = [
            {
                ID:'',
                Title: "About",
                Link: "#About",
                Active: false,
                Children: [],
                Class:''
            },
            {
                ID:'',
                Title: "Projects",
                Link: "#Projects",
                Active: false,
                Children: [],
                Class:''
            },
            {
                ID:'',
                Title: "Contact",
                Link: "#Contact",
                Active: false,
                Children: [],
                Class:''
            }
        ];

        projects.get({},function(response){
            response.map(function(item){
                TopNav[1].Children.push({Title:item.Name,Link:'#Projects/'+item.Name.replace(/ /g,"_")})
            });
        });
        return {
            TopNav: function () {
                return TopNav;
            },

            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle
            },
            NavbarOpen: function () {
                return NavbarOpen;
            },
            setNavbarOpen: function (newNavbarOpen) {
                NavbarOpen = newNavbarOpen
            }
        };
    });