using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Angular2CRUDExample
{
	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app)
		{
			// Routing of Angular2 
			// If the Browser calls a URL which doesn't exists on the server, it could be a Angular route.
			// handle the 404 error, which will occur in such cases. We need to serve the index.html to the client
			//app.Use(async (context, next) =>
			//{
			//	await next();

			//	if (context.Response.StatusCode == 404
			//		&& !System.IO.Path.HasExtension(context.Request.Path.Value))
			//	{
			//		context.Request.Path = "/index.html";
			//		await next();
			//	}
			//});

			app.UseDefaultFiles();
			app.UseStaticFiles();
		}
	}
}
