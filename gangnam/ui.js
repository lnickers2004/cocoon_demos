pc.script.create('ui', function (context) {
    var AUDIO_ENTITY = 'Background Audio';

    var icons = [
        {
            name: 'info',
            data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3QzhEQzQ5MEUwMjI2ODExODcxRkFGRTJCNjkzN0QzRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMDYzN0JENEIyNEUxMUUwOUNDNEM5MEQzRkJGRERGQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMDRGN0VFMEIyNEUxMUUwOUNDNEM5MEQzRkJGRERGQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhENThFOTQ5NDQyMDY4MTE4NzFGRTIxRUZFMUVBQjREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDOERDNDkwRTAyMjY4MTE4NzFGQUZFMkI2OTM3RDNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/YywSQAAAvJJREFUeNrsV19oUlEY393t6moyCyWI/g6CYOFDjDDwwQpGVEIZjKBg0Ev5Mt8sfVOIoMCH1VtPvvgWvRRYPTVhKEQw3VBDmNPCNp1j/knn9c/td+Aa19ty965ri+jAj3M859x7f9/3/b7vHCmO4wZ2sw0O7HL7T+DvJ0BRVC8MFgoFa6PRCDWbzWi1Wn2EOZqsSW4kC3qhF7elpaUJ7GlygpbNZu8Rw7Z7bwe/EwJGq9XeRU+LPGZCp/oTGlBVKpWfXJRMJhNiUv0KwbDL5bLUarViu93mCGKx2FvMnwSGpIaA2q4S9hAUAxw0Go2nzWbzqVwuV/L5fPOYywBFvLctxQE7JUCtrq4a8OzFcrmsDgQCH+12O3F9GfgGNCWXeJkhoNLp9DjLsvNE8R3XA2w8Hj8v1JTUEMghQG9sbLharVYNec8CnBBIv6dC9SudhjQU/5xhmFs2m+02rH0vflE+n9/Evj2yc0mCB+j19fWHiPUni8VCctxQLBa/1Ot1Tgiv13sda3v7EYJ9a2trr2D5BYwPz87O3oQGuj6OcvwZayf4zJBFQIrLKL1ebyPKBmpjY2NTEF3XhkQi8aajfrkRkEKgDhSA9szMzPGRkZEJIQGSDH6//wWGVfKzHxr4QXZ5edmDE48TAnOk+BwTG6NkCDpNrdPppsS1YXFx8TW6CtDa0Yki0QNUKBS6TCwmB1AHyIa6yWQaF6q/X3WAGR0dvSMWXyaTCc7Nza0Q65EZXpwHZwhZxa9kBoNhWKPRXBKzD4fDL0lmwBOPQeCGw+H4KpeAlBBQwWDwKgoRVyqVumC1Ws/B6mcIx4rb7b6CvQc6BJQsREw0Gn0g/jgBzgUWfdbpdF7DviNEqP3IAhoXTs1WC5FI5N309PQT6CDF1wq2H1kwNDk5eTaVSsWJ1TgRGwsLCx88Hs99rJEMOET2iGOv5I2I3O90wFFgP1/tKrzFBX7c3MowJW9EKj7X1TwB4upNvud+5VlFCPzzf82+CzAAdqY283YwERoAAAAASUVORK5CYII='
        },
        {
            name: 'mute',
            data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3QzhEQzQ5MEUwMjI2ODExODcxRkFGRTJCNjkzN0QzRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMDEyMzU5MUIyNEUxMUUwOUNDNEM5MEQzRkJGRERGQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMDEyMzU5MEIyNEUxMUUwOUNDNEM5MEQzRkJGRERGQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhENThFOTQ5NDQyMDY4MTE4NzFGRTIxRUZFMUVBQjREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDOERDNDkwRTAyMjY4MTE4NzFGQUZFMkI2OTM3RDNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GJl6ogAAA8BJREFUeNrMV11IU2EY3pljW43cWFuaZE4Qf1hCV3bRCkGJbrQLMbJJKKio4W3QhV4FDbwLutCkm7xRQ1DLQF160Y2KSBLCCsbGcjbm7/zb5rbT88o5clxnuh0te+Fh23dev+/5nvfvyLAsKztPk8vO2f4PAgzDpIzu7u6LwWCwNxaLuRwORwFDi1JMSg709vam7+3t2VnOFhYWrFhOo71SRcoEuMOnWIFNTk424JFSCgFFqodXVVV9VKvVFuE6wkDySwpB0gT6+/v1FRUVn1QqVclZlm5SVTA6OmqsrKwco8OT3ZiS0u/35yFcbS6XK1NyEtLhoVDoazQaZRNhYmKiEa6qI8mFnAiHww6Eh8Xn4uDg4JXjcoABy8KsrKxX+G48IpFcnoHLZEqQ/cLq6uqS0WjMT0tLKyovL3+NfWqwT0RMASVqel7sdpFI5ETwCtBFIHvBzs5OQ2dnZ+5d2MbGhpd8aK/Z2dlS8hErQ93+/n4UYKVAQECF3046DGH7VlhYmI+G9Yz3gyJD8eXKJyEtyqXUcVxo1CsrK0sgQKEzj4yMPGpqavqwvr7uJj+NRlNaXFysEasCyYfHEWDb29ttkDyM5JMh/g+wtru8vDxNfsiB9I6OjiJh2z7rYRTs6elZxI1/HMiqVOYRqd3dXRfvoNVqM4XnKk4zE0RsH9hWKBQH+0EJyngG0qv4/be3txmOQPRvEJDNzc3d0el0ZgoBlPjO3fo6v//MzIxXtBWfhoDgb1XI/JeUhFiLDQ8PvzWbzQqDwVBGPihPr81m89D4iCfAQhovpMo6pQCqtbU1v16vz5+fn3/f1tY2hXcFKyUfEXA6nXbKEyEBPhnCAwMDNtRu4JQEYtnZ2S21tbVVFovlRV9fX47JZHrO5UOwq6vrHRFghXJz39VALnAbuCfAfavV2oLutg6F2EQYHx/nGxEpquXauQGSL/I+drv9DdaukY9YJ2Q4EnogA8jkcBUoaGxsfOLz+Va3trZYMYyNjR0OI24vgtbtdn+h5wjHZ/y+AVxK1IoTTlUaKoAJStSAhP8kAoLmRIcV19fXP8bnTeCy2GtbMtnPq5NTXV39EF3NFwgEWCESEKBw6DhFtfHSx8+CY6sMCAE+JOp0c3NzK27tTaI0qQltAn4g8McYTrEVH5IYGhqaRU483dzc/JkECbIYe4zMqcyCQxJ4S5qrq6trRadzoeNFPB7PL+75P/m/gOFKjkrqVklJSRlXLQopk5ThxqQU7kpAw6m4Q+qwUvr5GQwhRqryhwqcp/0WYAD6fyma79bB/QAAAABJRU5ErkJggg=='
        }
    ];

    var UI = function (entity) {
        this.entity = entity;
    };

    UI.prototype = {
        initialize: function () {
            this.containerEl = document.getElementById('application-container');
            this.controlsEl = document.createElement('div');

            var image = document.createElement('img');
            image.src = icons[1].data;
            image.setAttribute('alt', icons[1].name);
            image.setAttribute('width', '32');
            image.setAttribute('height', '32');
            image.setAttribute('border', '0');
            this.controlsEl.appendChild(image);

            this.controlsEl.style.position = 'absolute';
            this.controlsEl.style.top = '4px';
            this.controlsEl.style.right = '4px';
            this.controlsEl.style.width = '32px';
            this.controlsEl.style.height = '32px';        
            this.controlsEl.style.color = '#fff';
            this.controlsEl.style.fontFamily = 'sans-serif';
            this.controlsEl.style.fontWeight = 'bold';
            this.controlsEl.style.textAlign = 'center';
            this.controlsEl.style.lineHeight = '30px';
            this.controlsEl.style.cursor = 'pointer';
            
            this.controlsEl.addEventListener('click', function (e) {
                var v = context.systems.audiosource.manager.getVolume();
                if (v) {
                    context.systems.audiosource.manager.setVolume(0);
                } else {
                    context.systems.audiosource.manager.setVolume(1);
                }
                pc.fw.Application.getApplication('application-canvas').canvas.focus();
                
                e.stopPropagation();
                e.preventDefault();
            });
            
            this.controlsEl.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                e.preventDefault();
            });
            
            this.containerEl.appendChild(this.controlsEl);            
        },
        
        update: function (dt) {
        }
    };

   return UI;
});